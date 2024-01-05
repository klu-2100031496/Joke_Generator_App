

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import "focus-visible/dist/focus-visible"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Button_c18f1aa0dc5f71ca7eeffdf97f4e59bd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_535826f2820e38f87c74f15936202d80 = useCallback((_e) => addEvents([Event("state.state.generate_joke", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_535826f2820e38f87c74f15936202d80}>
  {`Generate Joke`}
</Button>
  )
}

export function Text_aef1dc3f014af4934e55fee61729d9f0 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "2em"}}>
  {state__state.joke}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Fragment css={{"background": "#04090B", "height": "100vh", "paddingTop": "20%", "paddingLeft": "5%", "paddingRight": "5%"}}>
  <VStack alignItems={`center`} justifyContent={`center`} spacing={`1em`} sx={{"height": "100vh"}}>
  <Text_aef1dc3f014af4934e55fee61729d9f0/>
  <Button_c18f1aa0dc5f71ca7eeffdf97f4e59bd/>
</VStack>
</Fragment>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
