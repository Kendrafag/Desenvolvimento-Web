interface CardProps {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
}

export default function Card({ icon, iconAlt, title, description }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={icon} alt={iconAlt} width={64} height={64} />
            </span>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <hr />
            </div>
        </div>
    );
}