import { useState, useRef, useEffect } from 'react'
import Cursor from './components/Cursor'

function App() {

  let purple = false;

  const cursorRef = useRef();
  let tl = gsap.timeline({ delay: 0.5 })



  useEffect(() => {
    const hero = document.querySelector(".secondary-wrapper")
    tl.to(hero, {
      "--maskSize1": "10%",
      duration: 0.5,
      ease: "back.out(2)",
    }).to(hero, {
      "--maskSize2": "28%",
      "--maskSize3": "calc(28% + 0.1rem)",
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(2)",
    })
    document.addEventListener("mousemove", debounce(function (event) {
      const { clientX, clientY } = event
      const x = Math.round((clientX / window.innerWidth) * 100)
      const y = Math.round((clientY / window.innerHeight) * 100)

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.1,
        ease: "sine.in",
      })
    }, 2))
  }, [])

  function debounce(callback, wait) {
    var timeout;
    return function (e) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        callback(e);
      }, wait);
    }
  }
  function clickCallback() {
    const hero = document.querySelector(".secondary-wrapper");
    if (purple == false) {
      purple = true;
      tl.to(hero, {
        "--maskSize1": "100%",
        duration: 0.5,
        ease: "back.out(2)",
      });

      tl.to(document.body, {
        "--main-background": "#C595FF",
        "--main-dark": "#ffffff",
        "--main-white": "#C595FF",
        "--main-header": "#121212",
        "--main-light-purple": "#ffffff",
        "--main-secondary-background": "#121212",
        ease: "back.in(1)"
      })

      tl.to(hero, {
        "--maskSize1": "10%",
        duration: 0.5,
        ease: "back.out(1)",
      }).to(hero, {
        "--maskSize2": "28%",
        "--maskSize3": "calc(28% + 0.1rem)",
        duration: 0.5,
        ease: "back.in(2)",
      })
      

      // document.body.style.backgroundColor = "var(--main-light-purple)"
    } else {
      purple = false;
      tl.to(hero, {
        "--maskSize1": "100%",
        duration: 0.5,
        ease: "back.out(2)",
      });

      tl.to(document.body, {
        "--main-background": "#121212",
        "--main-dark": "#121212",
        "--main-white": "#ffffff",
        "--main-header": "#ffffff",
        "--main-light-purple": "#C595FF",
        "--main-secondary-background": "#C595FF",
        ease: "back.in(1)"
      })

      tl.to(hero, {
        "--maskSize1": "10%",
        duration: 0.5,
        ease: "back.out(1)",
      }).to(hero, {
        "--maskSize2": "28%",
        "--maskSize3": "calc(28% + 0.1rem)",
        duration: 0.5,
        ease: "back.in(2)",
      })
    }
  }

  return (
    <div className='main-wrapper' onClick={clickCallback}>
      <Cursor />
      <div className='primary-wrapper'>
        <div className='header-container'>
          <h3>Bring your</h3>
          <h1>Dream web vision</h1>
          <h3>To life</h3>
        </div>
      </div>
      <div className='secondary-wrapper' ref={cursorRef}>
        <div className='header-container header-container-secondary' >
          <h3>Bring your</h3>
          <h1>Dream web vision</h1>
          <h3>To life</h3>
        </div>
      </div>
    </div>
  )
}

export default App
