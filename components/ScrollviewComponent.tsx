import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { peopleData, PersonalData } from '../data/InformationData'
import Card from './Card'

type ScrollviewComponentProps = {
  isEnabled: boolean
}

const ScrollviewComponent = (props: ScrollviewComponentProps) => {
  const {isEnabled} = props
  return (
        <ScrollView horizontal={true} centerContent={true} decelerationRate={0} snapToInterval={400}>
            {
                peopleData.map((card: PersonalData, index: number) =>
                  <Card
                    personalImage={card.personalImage}
                    name={card.name}
                    iconsUrls={card.iconsUrls}
                    iconsMedia={card.iconsMedia}
                    info={card.info}
                    key={index}
                    qrURL={card.qrURL}
                    informationData={card.informationData}
                    isEnabled={isEnabled}
                  />
                )
            }
        </ScrollView>
  )
}

export default ScrollviewComponent

const styles = StyleSheet.create({})