<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Exception;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Whitecube\NovaFlexibleContent\Flexible;

class About extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\About';


    public static function label()
    {
        return 'About';
    }

    public static function singleRecord(): bool
    {
        return true;
    }
    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param Request $request
     * @return array
     * @throws Exception
     */
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Multilingual::make('Translate'),
            Flexible::make('Content')->collapsed(false)
                ->addLayout('1-st block','block1',[
                    Text::make('Title'),
                    Textarea::make('Description'),
                    Image::make('Image','image'),
                   // Image::make('Image 2','image2'),
                ])
                ->addLayout('2-nd block','block2',[
                    Text::make('Title'),
                    Image::make('Image','image'),
                    //Image::make('Image 2','image2'),
                ])
                ->addLayout('icons texts(for 2-nd block)','block2_addon',[
                    Text::make('Title'),
                    Text::make('Description'),
                    Image::make('Image ','image')->storeAs(function (Request $request) {
                        return sha1($request->image->getClientOriginalName()) . '.' . $request->image->getClientOriginalExtension();
                    }),
                ])
                ->addLayout('3-rd block','block3', [
                    Text::make('Title','title1'),
                    Text::make('Description'),
                    Image::make('Image 1','image1'),
                    Image::make('Image 2','image2'),
                ])
                ->addLayout('Team Top Text','team_top_text',[
                    Text::make('Title','title'),
                    Textarea::make('Description')
                ])
                ->addLayout('Teammate','team',[
                    Text::make('Name'),
                    Text::make('Surname'),
                    Text::make('Position'),
                    Image::make('Teammate photo')
                ])



        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param Request $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
