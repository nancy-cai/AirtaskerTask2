package stepDefinition;
import helper.Helper;
import pageObject.LoginPage;
import pageObject.DashboardPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	Helper helper = new Helper();
	LoginPage lp = new LoginPage(helper.getDriver());
	DashboardPage dp= new DashboardPage(helper.getDriver());
	

	
	@Given("^user is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
		helper.browserNavigate();
	    lp.assertTitle();
	}

	@Given("^Login form displayed$")
	public void login_form_displayed() throws Throwable {
	    lp.loginFormDisplay();
	}

	@When("^user enters username \"(.*?)\"$")
	public void user_enters_username(String name) throws Throwable {
	    lp.enterUsername(name);
	}

	@When("^user enters password\"(.*?)\"$")
	public void user_enters_password(String pass) throws Throwable {
	    lp.enterPassword(pass);
	}

	@When("^user clicks the Login button$")
	public void user_clicks_the_Login_button() throws Throwable {
	    lp.clickLogin();
	}

	@Then("^user should see the greeting message$")
	public void user_should_see_the_greeting_message() throws Throwable {
	    dp.checkGreetingMsg("Nancy");
	}
	
	
	@Then("^user should see \"(.*?)\"$")
	public void user_should_see(String error) throws Throwable {
		lp.checkErrorMsg(error);
	}
	
	@Then("^user should see modal with \"(.*?)\"$")
	public void user_should_see_modal_with(String error) throws Throwable {
	    lp.checkPopupError(error);
	   
	}

	@When("^user clicks Login with Facebook$")
	public void user_clicks_Login_with_Facebook() throws Throwable {
	    lp.clickFBLogin();
	}

	@Then("^user should see popup$")
	public void user_should_see_popup() throws Throwable {
	    lp.swithToFBLogin();
	}
	
	@When("^user enters valid FB credentials$")
	public void user_enters_valid_FB_credentials() throws Throwable {
	    lp.loginWithFB();
	}

	@Then("^user should be loggedin after popup closed$")
	public void user_should_be_loggedin_after_popup_closed() throws Throwable {
	    lp.switchBackToAT();
	    lp.assertTitle();
	    Thread.sleep(2000);
	    dp.checkGreetingMsg("Nancy");
	    Thread.sleep(2000);
	}
	
	@After("@LoginSuccess")
	public void deleteCreatedEmp() throws Throwable{
		dp.clickLogout();
		Thread.sleep(2000);
	}


}
