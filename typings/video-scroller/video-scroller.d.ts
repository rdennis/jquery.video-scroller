// Type definitions for jQuery 1.10.x / 2.0.x
// Project: http://jquery.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>

/**
 * Class for creating a Video Scroller.
 */
 declare class VideoScroller {
	constructor(options: VideoScroller.VideoScrollerConfig)
}
	
/**
 * video-scroller module
 */
declare module VideoScroller {
	/**
	 * Configuration settings when creating a VideoScroller.
	 */
	interface VideoScrollerConfig {
        el: HTMLElement,
        transitionTime?: number,
        invert?: boolean,
        scrollTimeout?: number,
        easingFunction?: string | ((t: number) => number),
        debug?: boolean
	}
} 