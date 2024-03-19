import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
    return (
        <div className="invisible md:visible">
            <AnimatedCursor
                innerSize={14}
                outerSize={13}
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={3}
                trailingSpeed={1}
                color='255, 145, 237'
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </div>
    );
}