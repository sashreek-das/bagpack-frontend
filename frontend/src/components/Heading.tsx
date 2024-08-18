interface HeadingProps {
    label: string;
}

export function Heading({ label }: HeadingProps) {
    return (
        <div className="font-bold text-4xl text-blue-800 pt-6">
            {label}
        </div>
    );
}
