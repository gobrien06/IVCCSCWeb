import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselIndicators} from 'reactstrap';
import './SlideShow.scss';

const items = [
  {
    src: 'https://i.imgur.com/qTYngWT.jpg',
  },
  {
    src: 'https://i.imgur.com/GPv9ByF.jpg',
  },
  {
    src: 'https://i.imgur.com/C3fFgXn.jpg',
  }
];

export default class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
     };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goTo = this.goTo.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExited() {
    this.animating = false;
  }

  onExiting() {
    this.animating = true;
  }

  next() {
    if (this.animating)
      return;
    const nextIndex = this.state.index === items.length - 1 ? 0 : this.state.index + 1;
    this.setState({ index: nextIndex });
  }

  previous() {
    if (this.animating)
      return;
    const nextIndex = this.state.index === 0 ? items.length - 1 : this.state.index - 1;
    this.setState({ index: nextIndex });
  }

  goTo(newIndex) {
    if (this.animating) return;
    this.setState({ index: newIndex });
  }

  render() {
    const { index } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        className = "slideShow"
        activeIndex={index}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} index={index} onClickHandler={this.goTo} />
        {slides}

      </Carousel>
    );
  }
}

