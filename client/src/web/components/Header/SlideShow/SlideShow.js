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
      activeIndex: 0,
      setActiveIndex:0,
      animating:false,
      setAnimating:false,
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.goTo = this.goTo.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExited() {
    this.animating = false;
    this.setAnimating = true;
  }

  onExiting() {
    this.animating = true;
    this.setAnimating = false;
  }

  next() {
    if (this.animating)
      return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating)
      return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goTo(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {

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
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goTo} className="indicators" />
        {slides}

      </Carousel>
    );
  }
}

