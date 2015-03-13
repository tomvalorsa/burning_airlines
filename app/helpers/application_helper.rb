module ApplicationHelper
  def nav_menu
    links = 
      "<div class='nav-links-left'>
        <li>
          #{ link_to('Burning Airlines', root_path) do fa_icon('plane', text: 'Burning ', right: true) end }
        </li>"
    if @current_user.present?
      links += 
        "<li class='nav-profile'>
         #{ link_to(@current_user.name, root_path) do fa_icon('user', text: (@current_user.name + ' '), right: true) end }
        </li>
        <li>
          #{ link_to(logout_path, title: 'Sign Out ', :method => :delete) }
        </li>
      </div>"
    elsif @current_user.present? && @curent_user.is_admin?
      links += 
        "<li>#{ link_to('All users', root_path) }</li></div>"
    else 
        "<h1 class='nav-home'>
          #{ link_to('Burning Airlines', root_path) do fa_icon('plane', text: 'Burning ', right: true) end }
        </h1>"
    end
  end

end
