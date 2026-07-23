import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { practiceAreas } from "@/config/practiceAreas"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Honeypot check
    if (formData.get("honey")) {
      return // Bot detected
    }
    
    setStatus("loading")
    setErrorMessage("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          city: formData.get("city"),
          area: formData.get("area"),
          message: formData.get("message"),
        }),
      })
      
      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem. Tente novamente ou use o WhatsApp.")
      }
      
      setStatus("success")
      form.reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Ocorreu um erro ao enviar sua mensagem.")
    }
  }

  return (
    <div className="bg-[#0c0a09] p-8 rounded-md shadow-sm border border-wood-900/50">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-950/30 text-green-500 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-medium text-white mb-2">Mensagem Enviada</h3>
          <p className="text-neutral-400">Agradecemos o contato. Retornaremos em breve.</p>
          <Button 
            className="mt-6" 
            variant="outline" 
            onClick={() => setStatus("idle")}
          >
            Enviar nova mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-4 bg-red-950/30 text-red-400 text-sm rounded-sm border border-red-900/50" role="alert">
              {errorMessage}
            </div>
          )}
          
          <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                Nome completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow disabled:opacity-50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-neutral-300">
                Telefone (WhatsApp) *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow disabled:opacity-50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                E-mail (opcional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled={status === "loading"}
                className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow disabled:opacity-50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-neutral-300">
                Cidade / Estado *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow disabled:opacity-50"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="area" className="text-sm font-medium text-neutral-300">
              Área de interesse
            </label>
            <select
              id="area"
              name="area"
              disabled={status === "loading"}
              className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow disabled:opacity-50"
            >
              <option value="">Selecione um assunto</option>
              {practiceAreas.map(area => (
                <option key={area.id} value={area.title}>{area.title}</option>
              ))}
              <option value="Outros">Outros</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-300">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={status === "loading"}
              maxLength={1000}
              className="w-full px-4 py-2 bg-black border border-wood-900/50 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-wood-500 transition-shadow resize-y disabled:opacity-50"
            ></textarea>
            <p className="text-xs text-white0">
              Não envie documentos sigilosos ou informações sensíveis pelo formulário inicial.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              disabled={status === "loading"}
              className="mt-1 w-4 h-4 bg-black text-wood-500 rounded-sm border-wood-800/50 focus:ring-wood-500"
            />
            <label htmlFor="privacy" className="text-sm text-neutral-400">
              Concordo com a <a href="/politica-de-privacidade" className="text-wood-400 underline hover:text-wood-300">Política de Privacidade</a> e autorizo o contato.
            </label>
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full sm:w-auto"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      )}
    </div>
  )
}
