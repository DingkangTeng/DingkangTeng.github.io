
(function () {
  function initializeGeographyMaps() {
    const elements = document.querySelectorAll(
      ".geography-canvas[data-map-config]"
    );

    elements.forEach(element => {
      if (element.dataset.initialized === "true") {
        return;
      }

      try {
        if (typeof L === "undefined") {
          throw new Error("Leaflet library was not loaded.");
        }

        const config = JSON.parse(element.dataset.mapConfig);

        // Set map height from _index.md
        const height = Number(config.height);

        element.style.height = `${Number.isFinite(height) && height > 0 ? height : 520}px`;

        console.log("Geography map config:", config);

        const map = L.map(element, {
          scrollWheelZoom:
            config.scroll_wheel_zoom !== false,
          worldCopyJump: true,
          zoomControl: true
        });

        L.tileLayer(
          "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution:
              "&copy; OpenStreetMap contributors"
          }
        ).addTo(map);

        const markers = [];

        for (const place of config.markers || []) {
          const coords = place.coordinates;

          if (
            !Array.isArray(coords) ||
            coords.length !== 2 ||
            !coords.every(Number.isFinite)
          ) {
            console.warn(
              "Invalid coordinates:",
              place.name,
              coords
            );
            continue;
          }

          const marker = L.circleMarker(coords, {
            radius: place.radius ?? 9,
            color: "#ffffff",
            weight: 2,
            fillColor: place.color || "#2563eb",
            fillOpacity: 0.95
          }).addTo(map);

          // Permanent university labels
          if (place.name) {
            marker.bindTooltip(place.name, {
              permanent: place.show_label !== false,
              direction: place.label_position || "top",
              offset: place.label_offset || [0, -10],
              className: "geography-label",
              opacity: 1
            });
          }

          // Popup information
          const popup = document.createElement("div");
          popup.className = "geography-popup";

          const heading = document.createElement("div");
          heading.className = "geography-popup-title";
          heading.textContent = place.name || "";
          popup.appendChild(heading);

          for (const detail of place.details || []) {
            const line = document.createElement("div");
            line.className = "geography-popup-detail";

            if (detail.label) {
              const strong = document.createElement("strong");
              strong.textContent = detail.label + ": ";
              line.appendChild(strong);
            }

            const value = document.createElement("span");
            value.textContent = String(detail.value ?? "");
            line.appendChild(value);

            popup.appendChild(line);
          }

          if (place.description) {
            const description = document.createElement("p");
            description.textContent = place.description;
            popup.appendChild(description);
          }

          marker.bindPopup(popup);
          markers.push(marker);
        }

        // Map viewport
        if (markers.length && config.fit_bounds !== false) {
          const group = L.featureGroup(markers);

          map.fitBounds(group.getBounds().pad(0.25), {
            maxZoom: config.max_fit_zoom ?? 4,
            padding: [20, 20]
          });
        } else {
          map.setView(
            config.center || [20, 0],
            config.zoom ?? 2
          );
        }

        element.dataset.initialized = "true";

        requestAnimationFrame(() => {
          map.invalidateSize();
        });

        console.log(
          "Geography map initialized:",
          markers.length,
          "markers"
        );

      } catch (error) {
        console.error(
          "Geography map initialization failed:",
          error
        );

        element.textContent =
          "Unable to load the interactive map.";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeGeographyMaps
    );
  } else {
    initializeGeographyMaps();
  }
})();
