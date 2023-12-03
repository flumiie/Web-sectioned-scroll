import { FullscreenHeading, Section } from "@/components";
import '../app/globals.css'
import { useCallback, useEffect, useRef, useState } from "react";

export default function Index() {
  const firstSectionRef = useRef<HTMLDivElement>(null)
  const secondSectionRef = useRef<HTMLDivElement>(null)
  const thirdSectionRef = useRef<HTMLDivElement>(null)
  const fourthSectionRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0);
  const [initialSectionHeights, setInitialSectionHeights] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  })
  const [firstSectionEnd, setFirstSectionEnd] = useState(false)
  const [secondSectionEnd, setSecondSectionEnd] = useState(false)
  const [thirdSectionEnd, setThirdSectionEnd] = useState(false)
  const [fourthSectionEnd, setFourthSectionEnd] = useState(false)
  const [firstSectionStyle, setFirstSectionStyle] = useState({})
  const [secondSectionStyle, setSecondSectionStyle] = useState({})
  const [thirdSectionStyle, setThirdSectionStyle] = useState({})
  const [fourthSectionStyle, setFourthSectionStyle] = useState({})

  const onScroll = useCallback(() =>
    setScrollY(window.scrollY)
    , []);

  useEffect(() => {
    setInitialSectionHeights({
      first: (firstSectionRef.current?.getBoundingClientRect().height ?? 0),
      second: (secondSectionRef.current?.getBoundingClientRect().height ?? 0),
      third: (thirdSectionRef.current?.getBoundingClientRect().height ?? 0),
      fourth: (fourthSectionRef.current?.getBoundingClientRect().height ?? 0)
    })
    window.addEventListener('resize', () => {
      setInitialSectionHeights({
        first: (firstSectionRef.current?.getBoundingClientRect().height ?? 0),
        second: (secondSectionRef.current?.getBoundingClientRect().height ?? 0),
        third: (thirdSectionRef.current?.getBoundingClientRect().height ?? 0),
        fourth: (fourthSectionRef.current?.getBoundingClientRect().height ?? 0)
      })
    });
  }, [])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, [onScroll]);


  useEffect(() => {
    if (scrollY >= initialSectionHeights.first) {
      setFirstSectionEnd(true)
    } else {
      setFirstSectionEnd(false)
    }

    if (scrollY >= initialSectionHeights.first + initialSectionHeights.second) {
      setSecondSectionEnd(true)
    } else {
      setSecondSectionEnd(false)
    }

    if (scrollY >= initialSectionHeights.first + initialSectionHeights.second + initialSectionHeights.third) {
      setThirdSectionEnd(true)
    } else {
      setThirdSectionEnd(false)
    }

    if (scrollY >= initialSectionHeights.first + initialSectionHeights.second + initialSectionHeights.third + initialSectionHeights.fourth) {
      setFourthSectionEnd(true)
    } else {
      setFourthSectionEnd(false)
    }
  }, [scrollY, initialSectionHeights])

  useEffect(() => {
    if (firstSectionEnd) {
      setFirstSectionStyle({
        position: 'fixed',
        width: '100%',
        top: 'inherit',
      });
      setSecondSectionStyle({
        top: initialSectionHeights.first + window.innerHeight,
        bottom: 0,
      })
      setThirdSectionStyle({
        top: initialSectionHeights.first + initialSectionHeights.second,
        bottom: 0,
      })
      setFourthSectionStyle({
        top: initialSectionHeights.first + initialSectionHeights.second + initialSectionHeights.third,
        bottom: 0,
      })
    } else {
      setFirstSectionStyle({
        position: 'relative',
        bottom: 0,
      });
    }
  }, [firstSectionEnd, initialSectionHeights])

  useEffect(() => {
    if (secondSectionEnd) {
      setSecondSectionStyle({
        position: 'fixed',
        width: '100%',
        top: 'inherit',
        bottom: 0,
      });
      setThirdSectionStyle({
        top: initialSectionHeights.first + initialSectionHeights.second + window.innerHeight,
        bottom: 0,
      });
      setFourthSectionStyle({
        top: initialSectionHeights.first + initialSectionHeights.second + initialSectionHeights.third + window.innerHeight,
        bottom: 0,
      });
    } else {
      setSecondSectionStyle({
        position: 'relative',
        top: initialSectionHeights.first + window.innerHeight,
        bottom: 0,
      });
    }
  }, [secondSectionEnd, initialSectionHeights])

  useEffect(() => {
    if (thirdSectionEnd) {
      setThirdSectionStyle({
        position: 'fixed',
        width: '100%',
        top: 'inherit',
        bottom: 0,
      });
      setFourthSectionStyle({
        top: initialSectionHeights.first + initialSectionHeights.second + initialSectionHeights.third + window.innerHeight,
        bottom: 0,
      });
    } else {
      setThirdSectionStyle({
        position: 'relative',
        top: initialSectionHeights.first + initialSectionHeights.second + window.innerHeight,
        bottom: 0,
      });
    }
  }, [thirdSectionEnd, initialSectionHeights])

  return (
    <main>
      <FullscreenHeading text="[Heading Text Here]" backgroundImage="/work.jpg" />
      <Section
        reference={firstSectionRef}
        style={firstSectionStyle}>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
        <p>First World 1</p>
        <p>First World 2</p>
        <p>First World 3</p>
        <p>First World 4</p>
        <p>First World 5</p>
        <p>First World 6</p>
        <p>First World 7</p>
      </Section>
      <Section
        reference={secondSectionRef}
        backgroundColor="blue"
        color="white"
        style={secondSectionStyle}
      >
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
        <p>Second World 1</p>
        <p>Second World 2</p>
        <p>Second World 3</p>
        <p>Second World 4</p>
        <p>Second World 5</p>
        <p>Second World 6</p>
        <p>Second World 7</p>
      </Section>
      <Section
        reference={thirdSectionRef}
        backgroundColor="darkmagenta"
        color="white"
        style={thirdSectionStyle}
      >
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
        <p>Third World 1</p>
        <p>Third World 2</p>
        <p>Third World 3</p>
        <p>Third World 4</p>
        <p>Third World 5</p>
        <p>Third World 6</p>
        <p>Third World 7</p>
      </Section>
      <Section
        reference={fourthSectionRef}
        backgroundColor="darkcyan"
        color="white"
        style={fourthSectionStyle}
      >
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
        <p>Fourth World 1</p>
        <p>Fourth World 2</p>
        <p>Fourth World 3</p>
        <p>Fourth World 4</p>
        <p>Fourth World 5</p>
        <p>Fourth World 6</p>
        <p>Fourth World 7</p>
      </Section>
    </main >
  )
}
