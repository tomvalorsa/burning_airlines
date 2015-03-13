module ApplicationHelper
  def nav_menu
    links = 
      "<div class='nav-links-left'>
        <li>
          #{ link_to(root_path('Burning Airlines')) do fa_icon('paper-plane-o', text: 'Burning Airlines', right: true) end }
        </li>"
    if @current_user.present? && @current_user.is_admin?
      links += 
        "<li>#{ link_to('All users', root_path) }</li>
        <li>#{ link_to('View planes', airplanes_path) }</li>
        <li class='nav-profile'>
          #{ link_to(root_path(@current_user.name)) do fa_icon('user', text: (@current_user.name + ' '), right: true) end }
        </li>
        <li>
          #{ link_to(login_path, title: 'Sign Out ', :method => :delete) do fa_icon('sign-out', text: 'Sign out ', right: true) end }
        </li>
      </div>"
    elsif @current_user.present? 
      links += 
        "<li class='nav-profile'>
          #{ link_to(root_path(@current_user.name)) do fa_icon('user', text: (@current_user.name + ' '), right: true) end }
        </li>
        <li>
          #{ link_to(login_path, title: 'Sign Out ', :method => :delete) do fa_icon('sign-out', text: 'Sign out ', right: true) end }
        </li>
      </div>"
    else 
        "<h1 class='nav-home'>
          #{ link_to(root_path('Burning Airlines')) do fa_icon('plane', text: 'Burning Airlines', right: true) end }
        </h1>"
    end
  end

end
