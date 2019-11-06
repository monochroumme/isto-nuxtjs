<?php

namespace App\Http\Controllers;

use App\About;
use App\Article;
use App\Category;
use App\IndexBlock;
use App\Project;
use App\Setting;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getProjects() {
        return Project::orderBy('sort_order')->get()->transform( function($project) {
            $media =$project->getMedia('main')->first();

            if($media) {
                $project->img = $media->getUrl();
            }

            return $project;
        });
    }

    public function getProject($id) {
        $project =Project::whereId($id)->firstOrFail();
        $media =$project->getMedia('main')->first();
        $project->img = $media->getUrl();
        return $project;
    }
    public function getAbout() {
        return About::first();
    }

    public function getArticles() {
        return Article::with('media')->get()->transform( function($project) {
           $project->img = $project->main;
           return $project;
        });
    }
    public function getArticle($id) {
        return Article::with('media')->whereId($id)->firstOrFail();
    }
    public function getSlides() {
        return Project::with('media')->where('in_slider',1)->get()->transform( function($project) {
            $media =$project->getMedia('main')->first();

            if($media) {
                $project->img = $media->getUrl();
            }

            return $project;
        });
    }

    public function getSettings() {
        return Setting::first();
    }
    public function getIndex() {
        return IndexBlock::first();
    }

    public function getCategories() {
        return Category::all();
    }

    public function getIndexCategories() {
        return Category::where('on_index',1)->take(2)->get();
    }
}
