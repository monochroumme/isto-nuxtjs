<?php

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Whitecube\NovaFlexibleContent\Flexible;

class Article extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Article';

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
     * @throws \Exception
     */
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('Title')->rules('required'),
            Date::make('Date')->rules('required'),
            Image::make('Main Image','main')->creationRules('required'),
            Flexible::make('Content','constructor')->collapsed(false)
                ->addLayout('1-st block','block1', [
                    Textarea::make('Title'),
                    Textarea::make('Description'),
                    // Image::make('Image 2','image2'),
                ])
                ->addLayout('2-nd block','block2', [
                    Image::make('Image 1','image1'),
                    Image::make('Image 2','image2'),
                    // Image::make('Image 2','image2'),
                ])->addLayout('3-rd block','block3', [
                    Text::make('Title'),
                    Textarea::make('Text'),
                    Image::make('Image','image'),
                ])->addLayout('4-th block','block4', [
                    Text::make('Title'),
                    Textarea::make('Text'),
                    Text::make('Author','author'),
                ]),
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
