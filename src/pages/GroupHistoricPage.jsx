import { useState } from "react";

import Header from "../components/Header/header";
import { w } from "windstitch";
import { useParams } from "react-router-dom";
import PaymentCard from "../components/Card/paymentCard";

export default function GroupHistoricPage() {
  const { groupId } = useParams();

  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Historico</Title>
        <OlBox>
          <CardBox>
            <PaymentCard />
            <PaymentCard />
            <PaymentCard />
          </CardBox>
        </OlBox>
      </WhiteBox>
    </Container>
  );
}

const Container = w.div(`
    w-full
    h-screen
    bg-gradient-to-b from-blue-400 to-teal-400	
    flex
    items-center	
    justify-center
    overflow-auto	  
`);

const WhiteBox = w.div(`
 w-full md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
`);

const OlBox = w.div(`w-10/12 flex min-h-[50%] `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

const CardBox = w.ol(`
relative border-l border-gray-400`);

