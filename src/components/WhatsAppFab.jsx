"use client";
import { useEffect, useRef, useState } from "react";

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);     // panel de locales
  const [showTip, setShowTip] = useState(true); // globo “Reserva aquí”
  const panelRef = useRef(null);

  // ==== TRACKING HELPER (GTM + GA4) ====
  const trackEvent = (name, params = {}) => {
    if (typeof window !== "undefined") {

      // GA4 directo (si NO usas GTM)
      if (window.gtag) {
        window.gtag("event", name, params);
      }
    }
  };

  // EDITA tus 3 locales aquí
  const locales = [
    {
      nombre: "Surco",
      numero: "51941442963",
      mensaje:
        "Hola, vengo de la web yuuki.pe, quiero reservar en el local de Av. Aviación.",
      textoBoton: "Surco, Av. Aviación 4839",
    },
    {
      nombre: "San Isidro",
      numero: "51905463539",
      mensaje:
        "Hola, vengo de la web yuuki.pe, quiero reservar en el local de Av. 2 de Mayo en San Isidro.",
      textoBoton: "San Isidro, Av. 2 de mayo 585",
    },
    {
      nombre: "Monterrico",
      numero: "51932245538",
      mensaje:
        "Hola, vengo de la web yuuki.pe, quiero reservar en el local de Av. Primavera.",
      textoBoton: "Monterrico, Av. Primavera 1551",
    },
  ];

  const waLink = (numero, mensaje) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  // Abrir panel (y track)
  const handleTogglePanel = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        trackEvent("wa_panel_open", { source: "fab" });
      } else {
        trackEvent("wa_panel_close", { source: "fab" });
      }
      return next;
    });
    setShowTip(false);
  };

  // Track clic en local
  const handleClickReserva = (loc) => {
    trackEvent("wa_outbound_click", {
      local: loc.nombre,
      numero: loc.numero,
      label: loc.textoBoton,
      method: "wa.me",
    });
    // El <a> abre en _blank, no hace falta preventDefault
  };

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (open) {
          setOpen(false);
          trackEvent("wa_panel_close", { source: "escape" });
        }
        setShowTip(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]); // incluye "open" para track correcto

  // Cerrar panel al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
        trackEvent("wa_panel_close", { source: "outside_click" });
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      {/* Overlay para clic-fuera cuando el panel está abierto */}
      {open && <div className="fixed inset-0 z-40" aria-hidden="true" />}

      {/* Panel de locales */}
      <div
        ref={panelRef}
        className={`fixed z-50 right-4 md:right-6 bottom-24 md:bottom-28 w-72 max-w-[88vw] rounded-2xl border bg-white shadow-2xl transition-all ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Reservas por WhatsApp"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-green-500 font-semibold">¡Reserva ahora!</h3>
            <button
              onClick={() => {
                setOpen(false);
                trackEvent("wa_panel_close", { source: "close_button" });
              }}
              aria-label="Cerrar"
              className="rounded-lg p-1 text-green-500 hover:bg-neutral-100"
            >
              ✕
            </button>
          </div>

          <ul className="mt-3 space-y-2">
            {locales.map((loc) => (
              <li key={loc.nombre}>
                <a
                  href={waLink(loc.numero, loc.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClickReserva(loc)}
                  className="flex w-full items-center justify-between rounded-xl border px-3 py-2 bg-[#25D366] hover:bg-[#e8f8ee] hover:border-[#25D366] transition"
                >
                  <span className="font-medium text-[#ffffff] hover:text-[#25D366]">
                    {loc.textoBoton}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-[11px] text-neutral-500"></p>
        </div>
      </div>

      {/* Globo “Reserva aquí” */}
      {showTip && (
        <div className="fixed right-6 bottom-[92px] z-50">
          <div className="relative">
            <div className="rounded-xl bg-white shadow-xl border px-3 py-2">
              <div className="flex items-start gap-3">
                <span className="text-[15px] font-medium text-neutral-800">
                  Reserva aquí
                </span>
                <button
                  className="text-neutral-400 hover:text-neutral-600 -mt-0.5"
                  aria-label="Cerrar aviso"
                  onClick={() => setShowTip(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            {/* Puntero del globo (triángulo) */}
            <div className="absolute -bottom-1 right-8 h-3 w-3 rotate-45 bg-white border-b border-r" />
          </div>
        </div>
      )}

      {/* Botón flotante con badge */}
      <button
        onClick={handleTogglePanel}
        aria-label="Abrir WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 rounded-full shadow-2xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        style={{
          background:
            "linear-gradient(145deg, #2fe06f 0%, #25D366 40%, #1ebe5d 100%)",
          width: 64,
          height: 64,
        }}
      >
        {/* Ícono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-10 w-10 mx-auto text-white"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283 32 223.9 32 106.5 32 12 126.5 12 243.9c0 41.1 10.8 81 31.4 116.1L0 480l122.7-32.2c33.8 18.5 71.9 28.2 111.2 28.2h.1c117.4 0 211.9-94.5 211.9-211.9 0-59.1-23.1-115.1-65-157zm-157 339.5h-.1c-34.8 0-68.8-9.3-98.5-26.9l-7-4.1-72.8 19.1 19.4-71-4.6-7.3C43.7 315.3 33 280.3 33 243.9 33 139.6 119.6 53 223.9 53c55.9 0 108.4 21.8 148 61.4 39.6 39.7 61.4 92.2 61.4 148 0 104.3-86.6 190.9-190.4 190.9zM322.3 300c-5.3-2.7-31.3-15.4-36.2-17.2-4.9-1.8-8.4-2.7-12 2.7s-13.7 17.2-16.8 20.7c-3.1 3.6-6.2 4-11.5 1.3-31.3-15.6-51.7-27.8-72.4-63-5.5-9.5 5.5-8.8 15.6-29.2 1.7-3.6.9-6.7-.4-9.4-1.3-2.7-12-28.9-16.5-39.6-4.4-10.6-8.9-9.2-12-9.4-3.1-.2-6.7-.2-10.2-.2s-9.4 1.3-14.4 6.7c-5 5.3-19 18.6-19 45.4s19.5 52.7 22.3 56.3c2.7 3.6 38.1 58.2 92.3 81.7 12.9 5.6 22.9 8.9 30.7 11.3 12.9 4.1 24.7 3.5 34 2.1 10.4-1.6 31.3-12.8 35.7-25.2 4.4-12.4 4.4-23 3.1-25.2-1.4-2.3-4.9-3.6-10.2-6.3z"
          />
        </svg>

        {/* Badge rojo (con wiggle personalizado si lo tienes en tu CSS) */}
        <span className="absolute -top-1 -right-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white shadow-md animate-wiggle-twice">
          1
        </span>
      </button>
    </>
  );
}
