<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;

class About extends Model implements HasMedia
{
    use HasMediaTrait, HasTranslations;

    public $translatable = ['content'];

    public function registerMediaConversions(Media $media = null)
    {
        /* $this->addMediaConversion('main')
             ->nonQueued()
             ->crop('crop-center',990,485);*/
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('main');
    }
}
