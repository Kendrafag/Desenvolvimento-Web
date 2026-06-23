import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";

interface TestimonialCardProps {
    profileImage: string;
    testimony: string;
    rating: number;
    name: string;
    role: string;
    hidden?: boolean;
}

export default function TestimonialCard({
    profileImage,
    testimony,
    rating,
    name,
    role,
    hidden = false,
}: TestimonialCardProps) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="carousel-card" aria-hidden={hidden}>
            <img src={profileImage} alt={hidden ? "" : "Imagem perfil cliente"} />

            <span className="testimony">
                <p>{testimony}</p>
            </span>

            <span className="rating">
                {Array.from({ length: fullStars }).map((_, index) => (
                    <img
                        key={`full-${index}`}
                        src={Star}
                        alt={hidden ? "" : "ícone estrela"}
                        width={22}
                        height={20}
                    />
                ))}

                {hasHalfStar && (
                    <img
                        src={StarOuter}
                        alt={hidden ? "" : "ícone estrela sem fundo"}
                        width={20}
                        height={22}
                    />
                )}
            </span>

            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}
