import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import reframe from 'reframe.js';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;
  public initialized: Boolean = false;
  private sub: any;

  init() {
    if(!this.initialized) {
      this.initialized = true
      var tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  constructor(private route: ActivatedRoute) {
    this.init();
  }

  ngOnInit() {
    console.log('init')
    this.sub = this.route.params.subscribe(params => {
      this.video = params['id'];
      this.ready();
    });
    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.ready();
    };
  }
  ready() {
    this.reframed = false;
    console.log(this.video)
    this.player = new window['YT'].Player('player', {
      videoId: this.video,
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': (e) => {
          if (!this.reframed) {
            this.reframed = true;
            reframe(e.target.a);
          }
        }
      }
    });
  }
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
          // ga('send', 'event', 'video', 'started', this.video);
        } else {
          console.log('playing ' + this.cleanTime())
          // ga('send', 'event', 'video', 'played', 'v: ' + this.video + ' | t: ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
          // ga('send', 'event', 'video', 'paused', 'v: ' + this.video + ' | t: ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        // ga('send', 'event', 'video', 'ended', this.video);
        break;
    };
  };
  //utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        // ga('send', 'event', 'video', 'invalid id', this.video);
        break;
      case 100:
        // ga('send', 'event', 'video', 'not found', this.video);
        break;
      case 101 || 150:
        // ga('send', 'event', 'video', 'not allowed', this.video);
        break;
    };
  };
  ngOnDestroy() {
    console.log('destroy')
    this.sub.unsubscribe();
  }
}
