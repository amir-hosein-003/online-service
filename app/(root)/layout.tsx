import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout