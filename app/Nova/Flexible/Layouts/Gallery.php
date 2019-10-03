<?php

namespace App\Nova\Flexible\Layouts;

use Whitecube\NovaFlexibleContent\Layouts\Layout;

class Gallery extends Layout
{
    /**
     * The layout's unique identifier
     *
     * @var string
     */
    protected $name = 'gallery';

    /**
     * The displayed title
     *
     * @var string
     */
    protected $title = 'Gallery';

    /**
     * Get the fields displayed by the layout.
     *
     * @return array
     */
    public function fields()
    {
        return [
            // Define the layout's fields.
        ];
    }

}
