'use client'

import { useState } from 'react'

import TrainingAccordion from '../TrainingAccordion/TrainingAccordion'

export default function TrainingAccordions(){
    const [active, setActive] = useState('')

    return(
        <>
            <TrainingAccordion active={active} setActive={setActive} title={'Индивидуальная программа'} text={'Наши тренеры проведут с вами индивидуальную встречу для определения ваших целей и составления персональной программы тренировок. Мы учтем ваши предпочтения, уровень физической подготовки для максимального эффекта.'}/>
            <TrainingAccordion active={active} setActive={setActive} title={'Профессиональные тренеры'} text={'Наша команда тренеров - это профессионалы, обладающие высокими квалификациями и опытом работы. Они будут руководить вами на каждом шагу, помогая правильно выполнять упражнения и обеспечивать безопасность во время тренировок.'}/>
            <TrainingAccordion active={active} setActive={setActive} title={'Мотивация и поддержка'} text={'В Fusion мы ставим вашу мотивацию и поддержку на первое место. Наши тренеры всегда будут вас вдохновлять, побуждать к преодолению себя и помогать вам сохранять веру в свои возможности. Мы создаем командный дух и содействуем вашему успеху.'}/>
        </>
    )
}