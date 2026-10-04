# Manmohan Jewellers Billing

Billing app for Manmohan Jewellers, Main Bazar, Baba Bakala Sahib (Amritsar).
Gold, silver, Italian silver and diamond bills: estimates and GST invoices printed on A5.

Author: Harmanbir

## Use it

Open `index.html` in Chrome (Safari on iPhone). Everything is in that one file.

## Put it online with GitHub Pages (open it from any phone or computer)

1. Create a new repository on GitHub and upload `index.html` and `README.md`.
2. Go to **Settings → Pages**.
3. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/<repository-name>/`.
5. On your phone, open that link in Chrome and choose **Add to Home screen**.

## Features

- Daily Punjab rates (Gold 24K/22K/18K/14K, Silver, Italian Silver), filled in automatically while billing
- Polish = net wt × polish % (gold only)
- Weight = net wt + polish wt − stone wt
- Metal price = weight × rate, Diamond price = carat × rate per carat, Price = metal + diamond
- Estimate and GST invoice (CGST + SGST or IGST), A5 print with the shop letterhead
- Print saves the bill and starts a new one automatically
- Sales report: highest and lowest selling items, monthly sales, sales by metal, top customers, pending balances
- Search, reprint, edit or copy any saved bill; export to CSV

## Your data

Bills are saved in the browser of each device. Use **Settings → Download backup** every week and keep the file safe. Use **Restore from backup** to move bills to another device.
