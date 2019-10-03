<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ofcold\NovaSortable\SortableTrait;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Project extends Model implements HasMedia
{
    use  HasFlexible,
         SortableTrait,
         HasMediaTrait,
         HasTranslations;

    public $translatable = ['title','specifications'];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function getFlexibleContentAttribute()
    {
        return $this->flexible('flexible-content');
    }
}
