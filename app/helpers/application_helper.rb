module ApplicationHelper
  def tooltip(text: nil, key: nil)
    # Create tooltip helper
    # <a href="javascript:void(0);" data-controller="tooltip" data-bs-title="<%= I18n.t("tooltips.facilities.new.location_html") %>"><i class="bi bi-info-circle"></i></a>
    missing_css_class = ""
    if key
      missing_css_class = "tooltip_missing" unless I18n.exists?(key)
      text = I18n.t(key)
      if text.empty?
        # Detect blank keys and show them differently
        missing_css_class = "tooltip_blank"
        text = "translation blank: en.#{key}"
      end
    end
    if missing_css_class.empty? || session[:debug_tt] # || Rails.env.development?
      link_to(content_tag("i", nil, class: "ms-2 bi bi-info-circle #{missing_css_class}"), "javascript:void(0);", data: {controller: "tooltip", bs_html: true, bs_title: text, key: key})
    end
  end

  def header_with_tooltip(title, key, css_class = "")
    # Create title and tooltip helper
    # <h6>Location Details<a href="javascript:void(0);" data-controller="tooltip" data-bs-title="<%= I18n.t("tooltips.facilities.new.location_html") %>"><i class="bi bi-info-circle"></i></a></h6>
    content_tag("h5", class: css_class) do
      title.html_safe + tooltip(key: key)
    end
  end
end
