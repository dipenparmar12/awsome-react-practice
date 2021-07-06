import React from 'react';
import styled, {css} from 'styled-components';


const CssModalComponent = styled.div`
  overflow-x: scroll;

  padding-top: 50px;
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  z-index: 100;
  transition: transform .2s ease-out;

  //opacity: 0;
  //visibility: hidden;
  opacity: ${({show}) => show ? 1 : 0};
  visibility: ${({show}) => show ? 'visibility' : 'hidden'};

  transform: scale(0.5);

  ${({show}) => show && css`
    transform: scale(1);
  `}
  &:target {
    opacity: 1;
    visibility: visible;
  }

  .css_modal {
    overflow: hidden;
    width: 75%;
    height: 300px;
    background-color: #fff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto;

    display: table;

    &__left {
      display: table-cell;
      width: 33.333%;
    }

    &__right {
      display: table-cell;
      width: 66.666%;
      vertical-align: middle;
      padding: 30px 50px;
    }

    &__img {
      display: block;
      width: 100%;
    }

    &__text {
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 30px;

      column-count: 2;
      column-gap: 3em;
      column-rule: 1px solid lightgray;

      hyphens: auto;
    }

    &__btn {
      border: none;
      border-radius: 5px;
      background-color: lightgray;
      padding: 10px 40px;
      cursor: pointer;

      &:hover {
        background-color: darkgrey;
      }

      &:active {
        transform: translateY(1px);
      }
    }

    position: relative;

    &__close {
      cursor: pointer;
      position: absolute;
      top: 1.5em;
      right: 2.5em;

      &:link, &:visited {
        font-size: 40px;
        color: dimgray;
        text-decoration: none;
        transition: all .2s;
      }

      &:hover {
        color: black;
      }
    }
  }

`

export default function CssModal(props) {
  const [show, setShow] = React.useState(false);

  return (
      <>
        {/*<a href={'#model'}> Open Modal </a>*/}
        <button onClick={() => {
          setShow(!show)
        }}>
          Open modal
        </button>

        <CssModalComponent id={"model_container"} show={show}>
          <div className="css_modal">
            <div className="css_modal__left">
              <img className={'css_modal__img'} src={'https://picsum.photos/210/140/?random'} alt={'img 1'}/>
              <img className={'css_modal__img'} src={'https://picsum.photos/211/140/?random'} alt={'img 2'}/>
            </div>
            <div className="css_modal__right">
              <a className="css_modal__close" onClick={() => setShow(!show)}> &times; </a>
              <h2> Heading Primary Lorem ipsum dolor.</h2>
              <h3> Heading secondary Lorem ipsum dolor sit amet.</h3>
              <p className={'css_modal__text'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur cum cumque enim et ex fuga in molestiae, necessitatibus officia optio perferendis quas quasi quisquam repudiandae sapiente sunt unde vero voluptatem voluptates? Assumenda aut consectetur dolorem dolores doloribus eaque explicabo harum necessitatibus non
                nostrum porro praesentium quibusdam, sed vel, velit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut laudantium perspiciatis vitae! Autem corporis provident similique soluta voluptatem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos error facere illum itaque nemo, numquam provident tempora vero! Repellat!
              </p>
              <button className={'css_modal__btn'}>
                Submit
              </button>
            </div>

          </div>
        </CssModalComponent>
      </>

  );
}

