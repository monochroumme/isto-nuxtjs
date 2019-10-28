<?php

namespace App\Policies;

use App\About;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AboutPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any abouts.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the about.
     *
     * @param  \App\User  $user
     * @param  \App\About  $about
     * @return mixed
     */
    public function view(User $user, About $about)
    {
        return true;
    }

    /**
     * Determine whether the user can create abouts.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the about.
     *
     * @param  \App\User  $user
     * @param  \App\About  $about
     * @return mixed
     */
    public function update(User $user, About $about)
    {
        return true;
    }

    /**
     * Determine whether the user can delete the about.
     *
     * @param  \App\User  $user
     * @param  \App\About  $about
     * @return mixed
     */
    public function delete(User $user, About $about)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the about.
     *
     * @param  \App\User  $user
     * @param  \App\About  $about
     * @return mixed
     */
    public function restore(User $user, About $about)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the about.
     *
     * @param  \App\User  $user
     * @param  \App\About  $about
     * @return mixed
     */
    public function forceDelete(User $user, About $about)
    {
        //
    }
}
