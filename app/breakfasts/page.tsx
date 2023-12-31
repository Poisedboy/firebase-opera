'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import BreakfastCard from '../components/BreakfastCard';
import { Metadata } from 'next';

const breakfasts = [
    { id: 1, name: 'Яєшня', picture: '/fry-eggs.jpg', ingredients: 'яйце, помідор, огірок, листя салату, сосиска, булка, масло.' },
    { id: 2, name: 'Солодкі сирники', picture: '/sweet-curd-fritter.jpg', ingredients: 'сир кисломолочний, лісові ягоди, ягідний джем, сметана.' },
    { id: 3, name: 'Солені сирники', picture: '/solt-curd-fritter.jpg', ingredients: 'сир кисломолочний, зелень, соус песто, сметана.' },
    { id: 4, name: 'Млинці з куркою та грибами', picture: '/chicken-flippers.jpg', ingredients: 'млинці, курка, гриби, зелень, помідор чері, кетчуп.' },
    { id: 5, name: 'Солодкі млинці', picture: '/sweet-flippers.jpg', ingredients: 'млинці, сир кисломолочний, лісові ягоди, сметана.' },
    { id: 6, name: 'Вівсянка з сезонними', picture: '/cereal.jpg', ingredients: 'вівсянка, сезонні фрукти та ягоди.' },
    { id: 7, name: 'Тарілка "Здоров\'я"', picture: '/plate-health.jpg', ingredients: 'яйце, мікро-грін, помідор чері.' },
    { id: 8, name: 'Круасан з нарізкою', picture: '/croissant-n-cutting.jpg', ingredients: 'круасан, сир твердий, помідор, огірок, листя салату, оливки, масло.' },
    { id: 9, name: 'Вареники з картоплею', picture: '/pierogy-potato.jpg', ingredients: '' },
    { id: 10, name: 'Вареники з вишнями', picture: '/pierogy-cherry.jpg', ingredients: '' },
    { id: 11, name: 'Круасан з сезонними фруктами', picture: '/croissant-fruits.jpg', ingredients: '' },
    { id: 12, name: 'Вареники з сиром', picture: '/pierogy-syr.jpg', ingredients: '' },
    { id: 13, name: 'Курячий стейк, яєчня-скрембл, овочі, листя салату', picture: '/scramble.jpg', ingredients: '' },
    { id: 14, name: 'Вареники з чорницями', picture: '/pierogy-blueberries.jpg', ingredients: '' },
];

const metadata: Metadata = {
    title: 'Сніданки',
    description: 'Меню сніданків в готелі Опера Пасаж.',
    keywords: "готель, апартаменти, Львів, сніданки, парковка, контакти, правила."
}

const Breakfast = () => {
    return (
        <div className='mx-10 mt-10'>
            <Card className='p-10 mb-10 flex items-center justify-center flex-col gap-10'>
                <CardTitle>A la Carte</CardTitle>
                <CardContent>Сніданки подають з 8:00 до 11:00 в кафе на четвертому поверсі.</CardContent>
            </Card>
            <div className='pb-10 flex gap-5 flex-wrap justify-center'>
                {breakfasts.map(breakfast => (
                    <BreakfastCard
                        key={breakfast.id}
                        name={breakfast.name}
                        picture={breakfast.picture}
                        ingredients={breakfast.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default Breakfast
