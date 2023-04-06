import React from "react";
import Card from "./components/Card"
interface lendProps {}

export const Lend: React.FC<lendProps> = ({}) => {
  return (
    <div className="App">
      <section className="card-container">
        <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Read Post Now'
          image='https://source.unsplash.com/random'
          badge={{
            text: "New Post",
            filled: false,
          }}
          indicator="Sold"
          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
          }} />
        <Card
          body='Irure culpa quis in mollit nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='This is a Great Photo!'
          image='https://source.unsplash.com/random/500X400'
          badge={{
            text: "New Photo Alert",
            filled: false,
          }}
          indicator="New"
          subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
          }} />
        <Card
          body='hi'
          title='hi2'
          btn={{
            text: "Button",
            href: '#',
            type: 'primary',
            filled: false,
          }} />
      </section>
    </div>
  )
};
