angular.module('slideshowDirective', [])
.directive('slideshowFader', function() {

        // I alter the DOM to add the fader image.
        function compile( element, attributes, transclude ) {
            element.prepend( "<img class='fader' />" );

            return( link );

        }


        // I bind the UI events to the $scope.
        function link( $scope, element, attributes ) {

            var fader = element.find( "img.fader" );
            var primary = element.find( "img.image" );

            // Watch for changes in the source of the primary
            // image. Whenever it changes, we want to show it
            // fade into the new source.
            $scope.$watch(
                "slideshowImage",
                function( newValue, oldValue ) {

                    // If the $watch() is initializing, ignore.
                    if ( newValue === oldValue ) {

                        return;

                    }

                    // If the fader is still fading out, don't
                    // bother changing the source of the fader;
                    // just let the previous image continue to
                    // fade out.
                    if ( isFading() ) {

                        return;

                    }

                    initFade( oldValue );

                }
            );


            // I prepare the fader to show the previous image
            // while fading out of view.
            function initFade( fadeSource ) {

                fader
                    .prop( "src", fadeSource )
                    .addClass( "show" )
                ;

                // Don't actually start the fade until the
                // primary image has loaded the new source.
                primary.one( "load", startFade );

            }


            // I determine if the fader is currently fading
            // out of view (that is currently animated).
            function isFading() {

                return(
                    fader.hasClass( "show" ) ||
                    fader.hasClass( "fadeOut" )
                );

            }


            // I start the fade-out process.
            function startFade() {

                // The .width() call is here to ensure that
                // the browser repaints before applying the
                // fade-out class (so as to make sure the
                // opacity doesn't kick in immediately).
                fader.width();

                fader.addClass( "fadeOut" );

                setTimeout( teardownFade, 250 );

            }


            // I clean up the fader after the fade-out has
            // completed its animation.
            function teardownFade() {

                fader.removeClass( "show fadeOut" );

            }

        }


        // Return the directive configuration.
        return({
            compile: compile,
            restrict: "A"
        });

    }
);