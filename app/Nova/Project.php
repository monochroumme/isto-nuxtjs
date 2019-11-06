<?php

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Exception;
use Halimtuhu\ArrayImages\ArrayImages;
use Hnassr\NovaKeyValue\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;

class Project extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Project';

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
     * Build an "index" query for the given resource.
     *
     * @param NovaRequest $request
     * @param  Builder  $query
     *
     * @return Builder
     */
    public static function indexQuery(NovaRequest $request, $query)
    {
        $query->when(empty($request->get('orderBy')), function ($q) {
            $q->getQuery()->orders = [];
            return $q->orderBy(static::$model::orderColumnName());
        });

        return $query;
    }

    /**
     * Prepare the resource for JSON serialization.
     *
     * @param NovaRequest $request
     * @param  Collection  $fields
     *
     * @return array
     */
    public function serializeForIndex(NovaRequest $request, $fields = null)
    {
        return array_merge(parent::serializeForIndex($request, $fields), [
            'sortable'	=> true
        ]);
    }
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
            Text::make('Title')->rules('required'),
            Boolean::make('In Slider'),
            Images::make('Main Image','main'),
            BelongsTo::make('Category'),
            Flexible::make('Content')
                ->addLayout('Block 1','specification', [
                    Text::make('Location'),
                    Text::make('Type'),
                    Text::make('Place'),
                    Text::make('Year'),
                ])
                ->addLayout('Block 2','block2',[
                    Text::make('Title'),
                    Textarea::make('Description')
                ])
                ->addLayout('Gallery(Block 3)','gallery',[
                    Image::make('Image','image')
                ])
                ->addLayout('Text(Gallery block 3)','text',[
                   Text::make('Text')
                ])
                ->addLayout('Advanced Gallery(Block 4)','advanced_gallery',[
                    Text::make('Title'),
                    Textarea::make('Description'),
                    Image::make('Image 1','image1'),
                    Image::make('Image 2','image2'),

                ])
                ->addLayout('Gallery(Block 5)','gallery2',[
                    ArrayImages::make('Images', 'images')->disk('public')->path(''),
                ])
                ->addLayout('Video(Block 6)','video',[
                    Image::make('Video Thumb'),
                    Youtube::make('Video')
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
