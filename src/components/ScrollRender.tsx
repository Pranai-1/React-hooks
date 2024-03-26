import { useEffect, useRef, useState } from "react";

export default function ScrollRender() {
    const [items, setItems] = useState<number[]>([]);
    const timer = useRef<number | null>(null);

    useEffect(() => {
        const arr = [1, 2, 3, 4, 5];
        setItems(prev => [...prev, ...arr]);
        document.addEventListener("scroll", scrolled);
        
        // Cleanup function to remove event listener and clear interval
        return () => {
            document.removeEventListener("scroll", scrolled);
            if (timer.current !== null) {
                clearInterval(timer.current);
            }
        };
    }, []);

    function scrolled() {
        console.log("scrolled");
        if (timer.current !== null) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(() => {
            const newArr = items.map(item => item + 1);
            console.log(newArr)
            setItems(prev => [...prev, ...[6,7,8,9]]);
        }, 300);
    }
console.log(items)
    return (
        <div className="h-[1200px]">
            <p className="text-black">Hello</p>
            {items.map(item => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
}
