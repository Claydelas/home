import { forwardRef } from 'react'
import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

export const Spinner = () => (
    <div className="relative left-1/2 top-1/2">
        <ClimbingBoxLoader color="#ffffff" />
    </div>
)

export const ModelContainer = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => (
    <div className="w-64 h-64 mx-auto mb-5" ref={ref}>
        {children}
    </div>
))

const ModelLoader = () => {
    return (
        <ModelContainer>
            <Spinner />
        </ModelContainer>
    )
}

export default ModelLoader