import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as videojs from 'video.js'; // Import Video.js as a module
import 'video.js/dist/video-js.css'; // Import Video.js styles

@Component({
  selector: 'app-video-feed',
  templateUrl: './video-feed.component.html',
  styleUrls: ['./video-feed.component.css']
})
export class VideoFeedComponent implements OnInit, OnDestroy {
  @ViewChild('videoPlayer') private videoPlayer!: ElementRef;
  private player!: videojs.Player;

  constructor() { }

  ngOnInit(): void {
    // Initialize Video.js player
    this.player = videojs.default(this.videoPlayer.nativeElement, {
      controls: true,
      sources: [{
        src: 'http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8',
        type: 'application/x-mpegURL'
      }]
    }, () => {
      console.log('player is ready');
    });
  }

  ngOnDestroy() {
    // Dispose of the Video.js player when the component is destroyed
    if (this.player) {
      this.player.dispose();
    }
  }
}
