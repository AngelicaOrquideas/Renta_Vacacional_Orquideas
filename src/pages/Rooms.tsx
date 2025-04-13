import React from 'react';

interface RoomCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={title} style={styles.image} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>${price.toFixed(2)}</strong> por noche</p>
        </div>
    );
};

const Catalogo: React.FC = () => {
    const rooms = [
        {
            title: 'Habitación Deluxe',
            description: 'Una habitación espaciosa con vista al mar.',
            price: 120,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Suite Familiar',
            description: 'Ideal para familias, con dos camas dobles.',
            price: 200,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Habitación Económica',
            description: 'Perfecta para viajeros con presupuesto limitado.',
            price: 80,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div style={styles.container}>
            <h1>Catálogo de Habitaciones</h1>
            <div style={styles.grid}>
                {rooms.map((room, index) => (
                    <RoomCard
                        key={index}
                        title={room.title}
                        description={room.description}
                        price={room.price}
                        imageUrl={room.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
    },
};

export default Catalogo;