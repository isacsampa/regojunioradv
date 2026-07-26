/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from "react-helmet-async"
import { createHashRouter, RouterProvider } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"

import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { PracticeAreas } from "@/pages/PracticeAreas"
import { PracticeAreaDetail } from "@/pages/PracticeAreaDetail"
import { Team } from "@/pages/Team"
import { Blog } from "@/pages/Blog"
import { ArticleDetail } from "@/pages/ArticleDetail"
import { Contact } from "@/pages/Contact"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { TermsOfUse } from "@/pages/TermsOfUse"
import { NotFound } from "@/pages/NotFound"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "o-escritorio", element: <About /> },
      { path: "areas-de-atuacao", element: <PracticeAreas /> },
      { path: "areas-de-atuacao/:slug", element: <PracticeAreaDetail /> },
      { path: "equipe", element: <Team /> },
      { path: "conteudos", element: <Blog /> },
      { path: "conteudos/:slug", element: <ArticleDetail /> },
      { path: "contato", element: <Contact /> },
      { path: "politica-de-privacidade", element: <PrivacyPolicy /> },
      { path: "termos-de-uso", element: <TermsOfUse /> },
      { path: "*", element: <NotFound /> }
    ],
  },
])

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
