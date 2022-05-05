import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react'
import Loading from '../Loading'

interface ScreenshotButtonProps {
    screenshot: string|null
    onScreenshotChange: (imageData:string|null) => void
}

export default function ScreenshotButton({ screenshot, onScreenshotChange }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        console.log({image: base64image})
        onScreenshotChange(base64image)
        setIsTakingScreenshot(false)
    }
    if(screenshot){
        return (
            <button
                type='button'
                className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
                onClick={()=>onScreenshotChange(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}
            >
                <Trash weight='fill' />
            </button>
        )
    }

    return (
        <button
            type="button"
            className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
            onClick={handleTakeScreenshot}
        >
            {
                isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />
            }
        </button>
    )
}