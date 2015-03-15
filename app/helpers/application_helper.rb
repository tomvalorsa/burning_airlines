module ApplicationHelper
  def nav_menu
    links = 
      "<div>"
    if @current_user.present? 
      if @current_user.is_admin?
      links += 
        "<li class=pure-menu-item>
          #{ link_to(root_path, :class => 'pure-menu-link') do fa_icon('users', text: 'Customers', right: true) end }
        </li>
        <li class=pure-menu-item>
          #{ link_to(airplanes_path, :class => 'pure-menu-link')do fa_icon('plane', text: 'Planes', right: true) end }
        </li>"
      end
      links += 
        "<li class=pure-menu-item>
          #{ link_to(root_path, :class => 'pure-menu-link') do fa_icon('user', text: (@current_user.name + ' '), right: true) end }
        </li>
        <li class=pure-menu-item>
          #{ link_to(search_path, :class => 'pure-menu-link') do fa_icon('search', text: 'Search', right: true) end }
        </li>
        <li class=pure-menu-item>
          #{ link_to(login_path, :class => 'pure-menu-link', title: 'Sign Out ', :method => :delete) do fa_icon('sign-out', text: 'Sign out ', right: true) end }
        </li>
      </div>"
    end
  end

end
