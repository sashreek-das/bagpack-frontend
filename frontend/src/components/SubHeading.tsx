
interface SubHeadingProps {
    label: string;
}

export function SubHeading({ label }: SubHeadingProps) {
    return (
        <div className="text-lg font-semibold text-blue-600 mb-4">
            {label}
        </div>
    );
}
