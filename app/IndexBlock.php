<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class IndexBlock extends Model
{
    use HasTranslations;
    public $translatable =['constructor'];
}
