# Manmohan Jewellers Billing

Billing app for Manmohan Jewellers, Main Bazar, Baba Bakala Sahib (Amritsar).
Gold, silver, Italian silver and diamond bills: estimates and GST invoices printed on A5.

Author: Harmanbir

## Use it

Open `index.html` in Chrome (Safari on iPhone). Everything is in that one file.

## Put it online with GitHub Pages (open it from any phone or computer)

1. Create a new repository on GitHub and upload every file from this folder (index.html, the icon files, favicon.ico and manifest.webmanifest).
2. Go to **Settings → Pages**.
3. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/<repository-name>/`.
5. On your phone, open that link and choose **Add to Home screen** (Chrome) or **Share → Add to Home Screen** (Safari). On a Mac, open it in Safari and choose **File → Add to Dock**. The MJ logo is used as the app icon.

## Features

- Live rates from PJ Gold Bullion (pjgoldbullion.in): today's 24K (995), 22K and Silver fill in by themselves when the app opens; 18K and 14K are worked out from 24K; every rate can still be changed by hand
- Polish = net wt × polish % (gold only), 15% by default
- Weight = net wt + polish wt − stone wt
- Metal price = weight × rate, Diamond price = carat × rate per carat, Price = metal + diamond
- Estimate and GST invoice (CGST + SGST or IGST), A5 print with the shop letterhead
- Print saves the bill and starts a new one automatically
- Sales report: highest and lowest selling items, monthly sales, sales by metal, top customers, pending balances
- Search, reprint, edit or copy any saved bill; export to CSV

## Your data

Bills are saved in the browser of each device. Use **Settings → Download backup** every week and keep the file safe. Use **Restore from backup** to move bills to another device.
