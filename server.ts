import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  // Ensure we bind to PORT provided by the environment (Render sets process.env.PORT)
  // Default to 3000 if not provided
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "RESEND_API_KEY não configurada no servidor." });
      }
      
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { name, phone, email, city, area, message } = req.body;

      const contactEmail = process.env.CONTACT_EMAIL || "juniorregod@gmail.com";

      const data = await resend.emails.send({
        from: "Site Junior Rego <onboarding@resend.dev>",
        to: contactEmail,
        subject: `Novo contato pelo site: ${name}`,
        html: `
          <h2>Novo contato recebido pelo site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>E-mail:</strong> ${email || "Não informado"}</p>
          <p><strong>Cidade/Estado:</strong> ${city}</p>
          <p><strong>Área de interesse:</strong> ${area || "Não informada"}</p>
          <p><strong>Mensagem:</strong><br/> ${message.replace(/\n/g, "<br/>")}</p>
        `,
      });

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Error sending email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
