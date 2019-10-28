<?php

namespace App\Http\Controllers;

use App\About;
use App\Project;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getProjects() {
        return Project::all();
    }

    public function getAbout() {
        return About::first();
    }

    public function getSlides() {
        return Project::with('media')->get()->transform( function($project) {
            $media =$project->getMedia('main')->first();

            if($media) {
                $project->img = $media->getUrl();
            }

            return $project;
        });
    }
}
