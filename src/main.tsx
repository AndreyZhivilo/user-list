import './app/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './app/root-store.tsx'
import { Routes } from './app/router.tsx'




createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<Routes />
		</StoreProvider>
	</StrictMode>,
)
