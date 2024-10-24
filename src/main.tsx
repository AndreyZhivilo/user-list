import './app/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './app/root-store.tsx'
import { Routes } from './app/router.tsx'
import { Toaster } from "@/shared/ui/toaster"




createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<Routes />
			<Toaster />
		</StoreProvider>
	</StrictMode>,
)
