package springbootdev.Character;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/selectChar")
public class CharacterSelectController {

    @GetMapping
    public String selectCharacterPage(){
        return "select_character";
    }
}
