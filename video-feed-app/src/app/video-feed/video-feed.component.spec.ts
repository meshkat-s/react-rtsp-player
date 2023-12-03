import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFeedComponent } from './video-feed.component';

describe('VideoFeedComponent', () => {
  let component: VideoFeedComponent;
  let fixture: ComponentFixture<VideoFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoFeedComponent]
    });
    fixture = TestBed.createComponent(VideoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
