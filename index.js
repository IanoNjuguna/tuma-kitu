import { createWalletClient, custom } from 'https://esm.sh/viem'

const connectButton = document.getElementById("connectButton")

let walletClient = createWalletClient

async function connect()
{
	if (typeof window.ethereum !== "undefined")
	{
		walletClient = createWalletClient({
			transport: custom(window.ethereum)
		})
		await walletClient.requestAddresses()

	}
	else
	{
		connectButton.innerHTML = "Install Metamask!"
	}
}

connectButton.onclick = connect