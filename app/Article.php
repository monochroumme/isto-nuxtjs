<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;

class Article extends Model implements HasMedia
{
    use HasMediaTrait,HasTranslations;
    public $translatable = ['title','description','constructor'];
    protected $dates = ['date'];
    public function registerMediaConversions(Media $media = null)
    {
       /* $this->addMediaConversion('main')
            ->nonQueued()
            ->crop('crop-center',990,485);*/
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('main')->singleFile();
        $this->addMediaCollection('other');
    }
}
