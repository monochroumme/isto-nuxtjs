<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ofcold\NovaSortable\SortableTrait;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Project extends Model implements HasMedia
{
    use  HasFlexible,
         SortableTrait,
         HasMediaTrait,
         HasTranslations;

    public $translatable = ['title','specifications','content'];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function getFlexibleContentAttribute()
    {
        return $this->flexible('flexible-content');
    }


    public function registerMediaConversions(Media $media = null)
    {
        /* $this->addMediaConversion('main')
             ->nonQueued()
             ->crop('crop-center',990,485);*/
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('main')->singleFile();
    }
}
